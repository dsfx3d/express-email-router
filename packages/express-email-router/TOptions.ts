import {TransportOptions} from "nodemailer";

export type TOptions = {
  transport: TransportOptions;
  from: string;
};
