"use client";

import type { UseFormProps } from "react-hook-form";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useHookForm } from "react-hook-form";

export function useZodForm<Schema extends z.ZodType>(
  props: Omit<UseFormProps<Schema["_input"]>, "resolver"> & {
    schema: Schema;
  },
) {
  const form = useHookForm<Schema["_input"]>({
    ...props,
    resolver: async (data, context, options) => {
      return zodResolver(props.schema)(data, context, options);
    },
  });

  return form;
}
