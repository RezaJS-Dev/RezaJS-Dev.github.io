"use client";

import { FcCellPhone, FcFeedback } from "react-icons/fc";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form"; // React Hook Form for form handling
import { z } from "zod"; // Zod for schema validation
import { zodResolver } from "@hookform/resolvers/zod"; // Connects Zod with React Hook Form

// Define a Zod schema to validate form inputs
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
});

const labelClasses = [
  "flex",
  "flex-col",
  "gap-3",
  "justify-start",
  "items-start",
].join(" ");
const inputClasses = [
  "bg-wedgwood-50",
  "dark:bg-wedgwood-900",
  "border border-solid",
  "rounded-lg",
  "border-wedgwood-300",
  "dark:border-wedgwood-700",
  "w-full",
  "py-3",
  "px-4",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-wedgwood-500",
  "focus:border-wedgwood-500",
  "dark:focus:ring-wedgwood-400",
  "dark:focus:border-wedgwood-400",
  "placeholder:text-gray-500",
  "dark:placeholder:text-gray-400",
].join(" ");

const Contact = () => {
  // Initialize form handling with React Hook Form and Zod validation
  const {
    register,
    // Function to register form inputs
    handleSubmit,
    // Handles form submission
    reset,
    // Resets form fields after submit
    formState: { errors, isSubmitting }, // Provides form state (errors, loading, etc.)
  } = useForm({
    resolver: zodResolver(contactSchema), // Apply Zod validation via the resolver
  });

  const onSubmit = async (data) => {
    try {
      // Send form data to the backend API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Parse the server's JSON response
      const result = await res.json();

      // Show success or error toast
      if (result.success) {
        // Show success toast and clear the form
        toast.success("Message sent successfully!");
        reset();
      } else {
        // X Show an error toast with the server message (if available)
        toast.error(
          result.message || "Failed to send message. Please try again.",
        );
      }
    } catch (err) {
      // Catch any unexpected network or runtime errors
    }
  };

  return (
    <>
      <section className="flex flex-col max-w-3xl min-h-svh mx-auto justify-start items-center py-20 scroll-mt-24 text-center space-y-8 gap-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-main-color dark:text-main-color-300 text-3xl font-bold font-display">
            Contact Me
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-wedgwood-950 dark:text-wedgwood-50 text-xl flex gap-2 items-center">
              <FcCellPhone />
              <a href="tel:+989036243626">0903 624 3626</a>
            </p>
            <p className="text-wedgwood-950 dark:text-wedgwood-50 text-xl flex gap-2 items-center">
              <FcFeedback />
              <a href="mailto:Rezaajaafari@gmail.com">Rezaajaafari@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <form
            className="flex flex-col gap-5 font-display w-full text-md p-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="name" className={labelClasses}>
              <span className="font-semibold">Name:</span>
              <input
                id="name"
                type="text"
                className={inputClasses}
                placeholder="Your Name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </label>
            <label htmlFor="email" className={labelClasses}>
              <span className="font-semibold">Email:</span>
              <input
                id="email"
                type="email"
                className={inputClasses}
                placeholder="Your Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </label>
            <label htmlFor="message" className={labelClasses}>
              <span
                className="font-semibold"
                onClick={() => {
                  toast.error("Failed to send message. Please try again.");
                }}
              >
                Message:
              </span>
              <textarea
                id="message"
                type="text"
                className={inputClasses}
                placeholder="Your Message..."
                rows={5}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </label>
            <div className="w-fit">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  flex text-md py-2 px-3 border rounded-sm border-solid transition-all ease text-wedgwood-400 border-wedgwood-400 
                  hover:text-wedgwood-50 hover:bg-wedgwood-500 hover:border-wedgwood-500 cursor-pointer 
                `}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
