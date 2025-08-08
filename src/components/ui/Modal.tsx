import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarEvent, eventSchema } from '@/lib/schemas/eventSchema';

type ModalProps = {
  modalId: string;
  children: ReactNode;
  title?: string;
  open?: boolean;
  setOpenModal: (open: boolean) => void;
  recargarEventos: () => void; // Agrega esta propiedad opcional
};

export const Modal = ({ modalId, children, title, open, setOpenModal, recargarEventos }: ModalProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalendarEvent>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      descuento: false,
      pago: false,
      cabana: 'Regional Uno',
    },
  });

  const handleFormSubmit = async (data: CalendarEvent) => {
    await fetch('/api/eventos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (recargarEventos) recargarEventos();
    setOpenModal(false);
  };
  return (
    <dialog id={modalId} className="modal" open={open}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-3">
          <input type="hidden" {...register('id')} />

          <div>
            <label className="label">Título</label>
            <input
              className="input input-bordered w-full validator"
              {...register('title')}
              aria-invalid={errors.title ? 'true' : 'false'}
            />
            {errors.title && (
              <span className="text-error text-sm validator-hint">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="label">Inicio</label>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register('start')}
              />
              {errors.start && (
                <span className="text-error text-sm">
                  {errors.start.message}
                </span>
              )}
            </div>
            <div>
              <label className="label">Fin</label>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register('end')}
              />
              {errors.end && (
                <span className="text-error text-sm">{errors.end.message}</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="checkbox"
              {...register('descuento')}
            />
            <span>Descuento</span>
            <input type="checkbox" className="checkbox" {...register('pago')} />
            <span>Pago</span>
          </div>
          <div>
            <label className="label">Ubicación</label>
            <input
              className="input input-bordered w-full"
              {...register('ubicacion')}
            />
            {errors.ubicacion && (
              <span className="text-error text-sm">
                {errors.ubicacion.message}
              </span>
            )}
          </div>
          <div>
            <label className="label">Cabaña</label>
            <select
              className="select select-bordered w-full"
              {...register('cabana')}
            >
              {eventSchema.shape.cabana.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.cabana && (
              <span className="text-error text-sm">
                {errors.cabana.message}
              </span>
            )}
          </div>
          <div>
            <label className="label">Celular</label>
            <input
              className="input input-bordered w-full"
              {...register('celular')}
            />
            {errors.celular && (
              <span className="text-error text-sm">
                {errors.celular.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="label">Valor Total</label>
              <input
                type="number"
                className="input input-bordered w-full validator"
                {...register('valorTotal', { valueAsNumber: true })}
                aria-invalid={errors.valorTotal ? 'true' : 'false'}
              />
              {errors.valorTotal && (
                <span className="text-error text-sm validator-hint">
                  {errors.valorTotal.message}
                </span>
              )}
            </div>
            <div>
              <label className="label">Valor Noche</label>
              <input
                type="number"
                className="input input-bordered w-full validator"
                {...register('valorNoche', { valueAsNumber: true })}
                aria-invalid={errors.valorNoche ? 'true' : 'false'}
              />
              {errors.valorNoche && (
                <span className="text-error text-sm validator-hint">
                  {errors.valorNoche.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="label">Cantidad de Días</label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register('cantDias', { valueAsNumber: true })}
              />
              {errors.cantDias && (
                <span className="text-error text-sm">
                  {errors.cantDias.message}
                </span>
              )}
            </div>
            <div>
              <label className="label">Cantidad de Personas</label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register('cantPersonas', { valueAsNumber: true })}
              />
              {errors.cantPersonas && (
                <span className="text-error text-sm">
                  {errors.cantPersonas.message}
                </span>
              )}
            </div>
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
      <form action=""></form>
      <form method="dialog" className="modal-backdrop" onClick={() => setOpenModal(false)}>
        <button>close</button>
      </form>
    </dialog>
  );
};
