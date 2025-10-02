import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/Input/Input";
import { Dropzone } from "@/components/shared/Dropzone/Dropzone";

import type { IFormUpload } from "../types";

import {
  COMPANY_CONFIG,
  SPECIAL_CONFIG,
  DESCR_CONFIG,
} from "@/constants/validation";

import css from "./Form.module.css";

export const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormUpload>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <form className={css.form}>
      <div className={css.inputs}>
        <Input
          head="Название компании"
          placeholder="Введите название компании"
          type="text"
          error={errors.company?.message}
          {...register("company", COMPANY_CONFIG)}
        />

        <Input
          head="Название специальности"
          placeholder="Введите название специальности"
          type="text"
          error={errors.special?.message}
          {...register("special", SPECIAL_CONFIG)}
        />

        <Input
          head="Описание вакансии"
          placeholder="Введите описание вакансии"
          type="text"
          error={errors.descr?.message}
          {...register("descr", DESCR_CONFIG)}
          multiline={true}
          rows={10}
        />

        <Dropzone />
      </div>
    </form>
  );
};
