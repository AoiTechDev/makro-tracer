import { schema } from "@/schema/input";
import { z } from "zod";

export type FormFields = z.infer<typeof schema>