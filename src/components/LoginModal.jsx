import React, { useState } from "react";
<<<<<<< HEAD
=======
import { X } from "lucide-react";
import "./Register.css";
import ApiService from "../services/api";
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254

const LoginModal = ({ onClose, onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: "", field: "" });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    usn: "",
    section: "",
    phone: "",
    branch: "",
  });

<<<<<<< HEAD
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
=======
  const [error, setError] = useState({ message: "", field: "" });

  const branches = [
    "Biotechnology",
    "Civil Engineering",
    "Construction Technology and Management",
    "Computer Science and Engineering",
    "Computer Science and Engineering(AI & ML)",
    "Computer Science and Business System",
    "Electronics and Communication Engineering",
    "Information Science and Engineering",
    "Mechanical Engineering",
    "Bachelor of Computer Applications",
    "Bachelor of Business Administration",
    "other",
  ];

  // Password Validation
  const validatePassword = (password) => {
    if (password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/\d/.test(password)) return "Password must contain at least one number.";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter.";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!/[!@#$%^&*]/.test(password))
      return "Password must contain a special character (e.g., !@#$%).";
    return null;
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======
    if (loading) return;
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254
    setLoading(true);
    setError({ message: "", field: "" });

    try {
      if (isRegistering) {
        // ---------------------- VALIDATION ----------------------
        for (const key in formData) {
          if (
            Object.prototype.hasOwnProperty.call(formData, key) &&
            String(formData[key]).trim() === ""
          ) {
            setError({
              message: "Please fill in all required fields.",
              field: key,
            });
            setLoading(false);
            return;
          }
        }

        if (!formData.usn.toUpperCase().includes("JST")) {
          setError({
            message: 'Invalid USN. It must contain "JST".',
            field: "usn",
          });
          setLoading(false);
          return;
        }

<<<<<<< HEAD
        // ---------------------- BUILD SUBMISSION DATA ----------------------
        const submissionData = {
          username: formData.username,
          password: formData.password,
          email: formData.email,
          usn: formData.usn,
          section: formData.section,
          phone: formData.phone,
          branch: formData.branch,
        };

        // ---------------------- API CALL ----------------------
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
=======
        if (!formData.email.toLowerCase().endsWith("@gmail.com")) {
          setError({
            message: "Please provide a valid @gmail.com email address.",
            field: "email",
          });
          setLoading(false);
          return;
        }

        const passwordError = validatePassword(formData.password);
        if (passwordError) {
          setError({ message: passwordError, field: "password" });
          setLoading(false);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          setError({
            message: "Passwords do not match.",
            field: "confirmPassword",
          });
          setLoading(false);
          return;
        }

        const phoneRegex = /^(91)?[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
          setError({
            message: "Please enter a valid 10 or 12-digit phone number.",
            field: "phone",
          });
          setLoading(false);
          return;
        }

        // --- API Call: Register ---
        const { confirmPassword, ...submissionData } = formData;
        await ApiService.register(submissionData);

        // Success message + switch to login
        setError({
          message: "✅ Registration successful! Please login now.",
          field: "",
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254
        });

        setIsRegistering(false);

<<<<<<< HEAD
        if (!response.ok) {
          setError({
            message: result.message || "An error occurred.",
            field: "",
          });
        } else {
          alert("Registration Successful! A confirmation email has been sent.");
          onClose();
        }
      } else {
        // ---------------------- LOGIN ----------------------
        onLogin({
          username: "John Doe",
          email: formData.email,
          phone: "+1 (555) 987-6543",
          usn: "01JST21CS001",
          branch: "Computer Science and Engineering",
          section: "A",
        });

        onClose();
      }
    } catch (error) {
      console.error(error);
      setError({
        message: "Could not connect to the server. Please try again later.",
        field: "",
      });
=======
        // Reset form
        setFormData({
          username: "",
          password: "",
          confirmPassword: "",
          usn: "",
          branch: "",
          section: "",
          email: "",
          phone: "",
        });

        // Clear success message automatically
        setTimeout(() => setError({ message: "", field: "" }), 3000);
      } else {
        // --- API Call: Login ---
        const response = await ApiService.login({
          email: formData.email,
          password: formData.password,
        });

        // Store token + user in local storage
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        // Notify parent
        onLogin(response.user);
        onClose();
      }
    } catch (err) {
      if (err.response?.data?.errors) {
        setError({
          message: err.response.data.errors[0].msg,
          field: err.response.data.errors[0].param,
        });
      } else if (err.response?.data?.message) {
        setError({ message: err.response.data.message, field: "" });
      } else {
        setError({ message: err.message || "Something went wrong.", field: "" });
      }
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
=======
  // Handle Input Changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error.message) setError({ message: "", field: "" });
  };

  if (!isOpen) return null;

>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2>{isRegistering ? "Register" : "Login"}</h2>

<<<<<<< HEAD
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
=======
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegistering && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium custom-brown mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg ${
                      error.field === "username"
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {error.field === "username" && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium custom-brown mb-2">
                    USN
                  </label>
                  <input
                    type="text"
                    name="usn"
                    value={formData.usn}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg ${
                      error.field === "usn"
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {error.field === "usn" && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium custom-brown mb-2">
                Email
              </label>
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleChange}
              />

<<<<<<< HEAD
              <input
                type="text"
                name="usn"
                placeholder="USN"
                value={formData.usn}
                onChange={handleChange}
              />

              <input
                type="text"
                name="section"
                placeholder="Section"
                value={formData.section}
                onChange={handleChange}
              />

              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={formData.branch}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </>
          )}
=======
            {/* Password + Confirm Password */}
            <div
              className={isRegistering ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}
            >
              <div>
                <label className="block text-sm font-medium custom-brown mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg ${
                    error.field === "password"
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {error.field === "password" && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </div>
              {isRegistering && (
                <div>
                  <label className="block text-sm font-medium custom-brown mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg ${
                      error.field === "confirmPassword"
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {error.field === "confirmPassword" && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            {isRegistering && (
              <>
                {/* Branch + Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium custom-brown mb-2">
                      Branch
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg ${
                        error.field === "branch"
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Branch</option>
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                    {error.field === "branch" && (
                      <p className="text-red-500 text-sm mt-1">
                        {error.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium custom-brown mb-2">
                      Section
                    </label>
                    <input
                      type="text"
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg ${
                        error.field === "section"
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {error.field === "section" && (
                      <p className="text-red-500 text-sm mt-1">
                        {error.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium custom-brown mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="^(91)?[0-9]{10}$"
                    className={`w-full px-3 py-2 border rounded-lg ${
                      error.field === "phone"
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {error.field === "phone" && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full custom-accent text-brown font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              {loading
                ? isRegistering
                  ? "Registering..."
                  : "Logging in..."
                : isRegistering
                ? "Register"
                : "Login"}
            </button>
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {error.message && (
            <p className="error-message">{error.message}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading
              ? "Processing..."
              : isRegistering
              ? "Register"
              : "Login"}
          </button>
        </form>

        <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>

        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default LoginModal;
=======
}
>>>>>>> baa5f750486cfe2ccd539c4368078c757d9a7254
