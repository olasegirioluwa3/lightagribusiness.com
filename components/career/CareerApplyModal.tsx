"use client";

import React, { useState } from "react";
import { HiX, HiCheckCircle, HiBriefcase, HiMail, HiUser, HiPhone, HiLink } from "react-icons/hi";
import { JobRole, sampleJobs } from "./CareerOpenRoles";

interface CareerApplyModalProps {
  isOpen: boolean;
  selectedRole: JobRole | null;
  onClose: () => void;
}

export const CareerApplyModal: React.FC<CareerApplyModalProps> = ({
  isOpen,
  selectedRole,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roleId: selectedRole ? selectedRole.id : sampleJobs[0].id,
    portfolioUrl: "",
    coverNote: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync roleId if selectedRole changes
  React.useEffect(() => {
    if (selectedRole) {
      setFormData((prev) => ({ ...prev, roleId: selectedRole.id }));
    }
  }, [selectedRole]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#102015] border border-white/20 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close application form"
        >
          <HiX className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#8BC34A]/20 text-[#8BC34A] flex items-center justify-center mx-auto mb-2">
              <HiCheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-sans font-black text-2xl text-white">
              Application Received
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Thank you for applying to Light Agribusiness. Our talent and advisory team will review your credentials and contact you within 3–5 business days.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#8BC34A] text-[#0B150F] font-bold text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BC34A] block mb-1">
                CAREERS &amp; TALENT NETWORK
              </span>
              <h3 className="font-sans font-black text-2xl text-white tracking-tight">
                {selectedRole ? `Apply: ${selectedRole.title}` : "Join the Light Team"}
              </h3>
              <p className="text-xs text-white/70 mt-1">
                {selectedRole
                  ? `${selectedRole.department} • ${selectedRole.location} • ${selectedRole.type}`
                  : "Submit your profile to our talent network for current and upcoming opportunities."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Target Role Selector */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                  Target Position
                </label>
                <div className="relative">
                  <HiBriefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <select
                    value={formData.roleId}
                    onChange={(e) =>
                      setFormData({ ...formData, roleId: e.target.value })
                    }
                    className="w-full bg-[#182B1E] border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A]"
                    required
                  >
                    {sampleJobs.map((j) => (
                      <option key={j.id} value={j.id}>
                        {j.title} ({j.department} - {j.location})
                      </option>
                    ))}
                    <option value="general">
                      General / Future Openings (All Departments)
                    </option>
                  </select>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <HiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tayo Adeyemi"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-[#182B1E] border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] placeholder-white/30"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      required
                      placeholder="tayo@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#182B1E] border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] placeholder-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 / +254 ..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#182B1E] border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] placeholder-white/30"
                    />
                  </div>
                </div>
              </div>

              {/* CV / LinkedIn / Portfolio URL */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                  LinkedIn or Resume Link (Google Drive / Dropbox) *
                </label>
                <div className="relative">
                  <HiLink className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/... or drive.google.com/..."
                    value={formData.portfolioUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, portfolioUrl: e.target.value })
                    }
                    className="w-full bg-[#182B1E] border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] placeholder-white/30"
                  />
                </div>
              </div>

              {/* Cover Note / Brief Introduction */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                  Why Light Agribusiness? (Brief Note)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a short note about your practical agribusiness experience, systems skills, and why you want to work with us..."
                  value={formData.coverNote}
                  onChange={(e) =>
                    setFormData({ ...formData, coverNote: e.target.value })
                  }
                  className="w-full bg-[#182B1E] border border-white/20 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#8BC34A] placeholder-white/30 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#8BC34A] hover:bg-[#7CB342] text-[#0B150F] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#8BC34A]/25"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
