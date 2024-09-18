import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export async function navigate(route: string, params?: object) {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(route, params));
  }
}
export async function resetAndNavigate(routeName: string) {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
}
