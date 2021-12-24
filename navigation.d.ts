import { RootStackParamList } from "./src/NavigationStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
