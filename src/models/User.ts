import { prop, getModelForClass } from "@typegoose/typegoose";

export class User {
  @prop({ required: true, index: true, unique: true })
  name: string;

  @prop()
  picture: string;

  @prop()
  email: string;

  @prop()
  familyName: string;

  @prop()
  givenName: string;

  @prop()
  imageUrl: string;

  @prop({ required: true, default: true })
  isAdmin: boolean;
}

// Get User model
const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});

// Get or create user
export async function findUser(email: string) {
  console.log("finduser called");
  let user = await UserModel.findOne({ email });

  if (!user) {
    try {
      user = await UserModel.create({ email } as User);
    } catch (err) {
      user = await UserModel.findOne({ email });
    }
  }
  return user;
}
