import * as React from 'react';
import { FC, ReactElement } from 'react';

type VM<ViewModel> = {
  vm: ViewModel;
};

type WrappedProps<ViewModel, ComponentProps> = ComponentProps & VM<ViewModel>;
type ViewModelHook<ViewModel, ComponentProps> = (
  props: ComponentProps
) => ViewModel;

export const withViewModelHook = <ViewModel, ComponentProps>(
  useViewModelHook: ViewModelHook<ViewModel, ComponentProps>,
  Component: FC<WrappedProps<ViewModel, ComponentProps>>
) => {
  return (
    props: ComponentProps
  ): ReactElement<WrappedProps<ViewModel, ComponentProps>> => {
    const viewModel = useViewModelHook(props);
    return <Component vm={viewModel} {...props} />;
  };
};
