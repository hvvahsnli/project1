import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    // Validation schemas
    const loginSchema = Yup.object({
        email: Yup.string().email("Please enter a valid email").required("Email is required"),
        password: Yup.string().min(4, "Minimum 4 characters").required("Password is required"),
    });

    const registerSchema = Yup.object({
        name: Yup.string().required("First name is required"),
        surname: Yup.string().required("Last name is required"),
        email: Yup.string().email("Please enter a valid email").required("Email is required"),
        password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    });

    // Formik hook
    const formik = useFormik({
        initialValues: isLogin
            ? { email: "", password: "" }
            : { name: "", surname: "", email: "", password: "" },
        validationSchema: isLogin ? loginSchema : registerSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            if (isLogin) {
                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        isLoggedIn: true,
                        user: { email: values.email },
                    })
                );
                toast.success("Login successful!", { position: "top-center" });
            } else {
                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        isLoggedIn: true,
                        user: {
                            name: values.name,
                            surname: values.surname,
                            email: values.email,
                        },
                    })
                );
                toast.success(`Welcome, ${values.name} ${values.surname}!`, { position: "top-center" });
            }
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center p-6 transition-colors duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 dark:bg-gray-900 dark:bg-none">

            <ToastContainer />
            <div className="bg-white dark:bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-lg shadow-lg max-w-md w-full p-8 transition-colors duration-500">
                <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400 text-center">
                    {isLogin ? "Login" : "Register"}
                </h2>
                <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
                    {isLogin
                        ? "Log in to your account"
                        : "Create a new account and join us"}
                </p>

                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder="First Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name || ""}
                                className={`w-full p-2 rounded border transition-colors duration-300
                                  ${formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-sm text-red-500">{formik.errors.name}</p>
                            )}

                            <input
                                type="text"
                                name="surname"
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.surname || ""}
                                className={`w-full p-2 rounded border transition-colors duration-300
                                  ${formik.touched.surname && formik.errors.surname ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                            />
                            {formik.touched.surname && formik.errors.surname && (
                                <p className="text-sm text-red-500">{formik.errors.surname}</p>
                            )}
                        </>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`w-full p-2 rounded border transition-colors duration-300
                          ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-sm text-red-500">{formik.errors.email}</p>
                    )}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={`w-full p-2 rounded border transition-colors duration-300
                          ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-sm text-red-500">{formik.errors.password}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-pink-600 dark:bg-pink-500 text-white p-2 rounded hover:bg-pink-700 dark:hover:bg-pink-600 transition"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-pink-600 dark:text-pink-400 font-semibold hover:underline"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
