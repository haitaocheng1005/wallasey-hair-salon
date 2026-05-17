import { services } from "@/data/salon";
import { Icon } from "./Icon";

export function BookingForm() {
  return (
    <form
      id="booking-form"
      action="mailto:hello@whiteseahairsalon.co.uk"
      method="post"
      encType="text/plain"
      className="rounded-lg border border-white/10 bg-salon-charcoal p-5 shadow-2xl shadow-black/25 sm:p-7"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-normal text-salon-pink">
          Booking form
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-white">
          Send Booking Request
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/66">
          Share a few details and the salon can confirm the best appointment
          time, service, and consultation needs.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" autoComplete="name" required />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
        <Field label="Email" name="email" type="email" autoComplete="email" />
        <label
          htmlFor="preferred-service"
          className="grid gap-2 text-sm font-semibold text-white/86"
        >
          Preferred Service
          <select
            id="preferred-service"
            name="service"
            className="focus-ring min-h-12 rounded-lg border border-white/14 bg-salon-black px-4 text-base text-white transition focus:border-salon-pink"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <Field label="Preferred Date" name="date" type="date" />
        <label
          htmlFor="booking-message"
          className="grid gap-2 text-sm font-semibold text-white/86 sm:col-span-2"
        >
          Message
          <textarea
            id="booking-message"
            name="message"
            rows={5}
            placeholder="Tell us about your hair goals, colour history, or any appointment preferences."
            className="focus-ring rounded-lg border border-white/14 bg-salon-black px-4 py-3 text-base leading-7 text-white placeholder:text-white/36 transition focus:border-salon-pink"
          />
        </label>
      </div>

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-salon-pink px-5 py-3 text-sm font-bold uppercase tracking-normal text-salon-black transition hover:bg-salon-rose hover:text-white sm:w-auto"
      >
        <Icon name="send" size={17} aria-hidden="true" />
        Send Booking Request
      </button>

      <p className="mt-4 text-sm leading-6 text-white/58">
        This request opens your email app. For urgent bookings, please call the
        salon directly.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type, autoComplete, required }: FieldProps) {
  const id = `booking-${name}`;

  return (
    <label
      htmlFor={id}
      className="grid gap-2 text-sm font-semibold text-white/86"
    >
      {label}
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="focus-ring min-h-12 rounded-lg border border-white/14 bg-salon-black px-4 text-base text-white placeholder:text-white/36 transition focus:border-salon-pink"
      />
    </label>
  );
}
