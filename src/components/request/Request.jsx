import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Container } from "../container";
import { Title } from "../title";
import { formatPhone } from "@/utils";
import { ChevronDown } from "@/assets/icons";
import RequestMenu from "../menu/RequestMenu";
import { POST_SHEET } from "../../constants";
import { Spinner } from "../spinner";

export const Request = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const payload = {
        ...data,
        courseName: t(selected),
        phone: data.phone.replace(/\D/g, ""),
      };
      await axios.post(POST_SHEET, payload, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      reset();
      toast.success(t("success"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setValue("phone", formatted, { shouldValidate: true, shouldDirty: true });
  };
  const handleAgeChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    val = val.replace(/^0+/, "");
    val = val.slice(0, 2);
    setValue("age", val, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <section className="bg-black py-20">
      <Container>
        <Title className="text-center mb-20">{t("title2")}</Title>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between font-involve gap-[15px]">
            {/* Name Input */}
            <div className="flex flex-col w-[230px]">
              <input
                type="text"
                placeholder={t("name")}
                {...register("name", {
                  required: t("errorName"),
                  pattern: {
                    value: /^[A-Za-z\u0400-\u04FF]{2,}$/,
                    message: t("errorNameLetters"),
                  },
                })}
                className="pb-4 pt-[14px] pl-[29px] pr-2 text-xl rounded-[9px] focus:outline-none"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 mx-4">
                  {t("errorName")}
                </span>
              )}
            </div>

            {/* Phone Input */}
            <div className="flex flex-col w-[230px]">
              <input
                type="text"
                placeholder={t("phoneNumber")}
                {...register("phone", {
                  required: t("errorPhone"),
                  validate: (value) =>
                    /^\d{2} \d{3} \d{2} \d{2}$/.test(value) ||
                    t("errorPhoneFormat"),
                })}
                onChange={handlePhoneChange}
                className="pb-4 pt-[14px] pl-[29px] pr-2 text-xl rounded-[9px] focus:outline-none"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1 mx-4">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Menu Input with animation */}
            <div className="w-[310px] relative">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="pb-4 pt-[14px] pl-5 pr-2 text-xl rounded-[9px] text-lightBlack w-full bg-white flex justify-between items-center"
              >
                {selected ? t(selected) : t("selectCourse")}
                <ChevronDown
                  className={`w-[24px] h-6 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              <RequestMenu
                open={open}
                setOpen={setOpen}
                setSelected={setSelected}
                t={t}
                selected={selected}
              />
            </div>

            {/* Age Input */}
            <div className="flex flex-col w-[173px]">
              <input
                type="text"
                inputMode="numeric"
                placeholder={t("age")}
                {...register("age", {
                  required: t("errorAge"),
                  validate: (v) =>
                    (v !== "" && /^[1-9]\d*$/.test(v)) || t("errorAge"),
                })}
                onChange={handleAgeChange}
                className="pb-4 pt-[14px] pl-[35px] pr-[39px] text-xl rounded-[9px] focus:outline-none"
              />
              {errors.age && (
                <span className="text-red-500 text-sm mt-1 mx-4">
                  {errors.age.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="w-[230px]">
              <button
                type="submit"
                disabled={loading}
                className="h-[62px] w-full bg-goldenYellow text-black font-bold text-xl flex justify-center items-center rounded-[7px]"
              >
                {loading ? <Spinner /> : t("get")}
              </button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Request;
