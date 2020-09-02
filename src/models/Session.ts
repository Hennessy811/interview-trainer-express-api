import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./User";
import { Scene } from "./Scene";

export class Session {
  @prop({ ref: Scene })
  scene: Ref<Scene>;

  @prop({ ref: User })
  interviewer: Ref<User>;

  @prop({ ref: User })
  candidate: Ref<User>;
}

const SessionModel = getModelForClass(Session, {
  schemaOptions: { timestamps: true },
});

// interviewerId, scenarioId
export async function createSession(interviewerId, scenarioId) {
  const session = await SessionModel.create({
    interviewer: interviewerId,
    scene: scenarioId,
  } as Session);
  return session;
}

export async function joinSession(
  sessionId,
  userId,
  role: "candidate" | "interviewer"
) {
  let scene;
  if (role === "candidate") {
    scene = await SessionModel.findOneAndUpdate(
      { _id: sessionId },
      { candidate: userId }
    );
  } else {
    scene = await SessionModel.findOneAndUpdate(
      { _id: sessionId },
      { interviewer: userId }
    );
  }
  return scene;
}
