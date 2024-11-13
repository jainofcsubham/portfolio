import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { EMAIL_RATE_LIMIT_THRESHOLD, LAST_MAIL_SENT_KEY } from "../library/constants";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {

    const lastMailSent = localStorage.getItem(LAST_MAIL_SENT_KEY)
    const now = Date.now();
    const limitInMilliseconds = EMAIL_RATE_LIMIT_THRESHOLD; 
    if (lastMailSent && now - parseInt(lastMailSent) < limitInMilliseconds) {
      toast.error("You can only send a message once every hour.");
      return;
    }
    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        ...data,
      },import.meta.env.VITE_USER_ID)
      .then((_res) => {
        toast.success('I will get in touch with you soon.');
        reset()
        localStorage.setItem("lastSent", Date.now().toString());
      })
      .catch((err) => {
        toast.error('Please try again.');
        console.log(err);
      });
  };

  return (
    <>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
            <label
            className="block text-sm font-medium text-white mb-1"
            htmlFor="name"
            >
            Name
            </label>
            <input
            id="name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
            <p className="absolute text-xs text-red-500">{errors.name.message}</p>
            )}
        </div>

        <div className="relative">
            <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1"
            >
            Email
            </label>
            <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            {...register("email", {
                required: "Email is required",
                pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
                },
            })}
            />
            {errors.email && (
            <p className="absolute text-xs text-red-500">
                {errors.email.message}
            </p>
            )}
        </div>

        <div className="relative">
            <label
            className="block text-sm font-medium text-white mb-1"
            htmlFor="message"
            >
            Message
            </label>
            <textarea
            id="message"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            rows={4}
            {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
            <p className="absolute text-xs text-red-500">
                {errors.message.message}
            </p>
            )}
        </div>

        <button
            className="w-full border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors"
            type="submit"
        >
            Send Message
        </button>
        </form>
        <ToastContainer />
    </>
    
  );
};
