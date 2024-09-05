import {model, Schema} from 'mongoose';
import {TwoFA} from '../../types/2FA';

const TwoFASchema = new Schema<TwoFA>({
  // add userId (Number, required, unique)
  userId: {type: Number, required: true, unique: true},
  // add email (String, required, unique)
  email: {type: String, required: true, unique: true},
  // add twoFactorSecret (String, required)
  twoFactorSecret: {type: String, required: true},
  // add twoFactorEnabled (Boolean, default: false)
  twoFactorEnabled: {type: Boolean, default: false},
});

export default model<TwoFA>('TwoFA', TwoFASchema);
