import { prop, getModelForClass } from "@typegoose/typegoose";

class Question {
  @prop({ required: true })
  title: string;

  @prop({ default: "text" })
  type: string;

  @prop()
  correctAnswer: string;
}

class Section {
  @prop()
  title: string;

  @prop()
  questions!: Question[];
}

class Settings {
  @prop({ default: false })
  public: boolean;

  @prop({ default: true })
  shareQuestions: boolean;
}

export class Scene {
  @prop({ required: true })
  public title: string;

  @prop()
  public tags!: any;

  @prop()
  public sections!: Section[] | any;

  @prop()
  public settings: Settings;
}

// Get User model
const ScenarioModel = getModelForClass(Scene, {
  schemaOptions: { timestamps: true },
});

// Get or create user
export async function createScenario(scene: any) {
  console.log({ scene });
  const scenario = await ScenarioModel.create({ ...scene } as Scene);
  return scenario;
}

export async function listScenarios() {
  let scenes = await ScenarioModel.find();
  return scenes;
}
export async function getScenario(id: string) {
  let scene = await ScenarioModel.findById(id);
  return scene;
}
