import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { getStore } from './store';

type Store = ReturnType<typeof getStore>
type AppDispatch = Store['dispatch'];
type RootState = ReturnType<Store['getState']>;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
    useAppDispatch,
    useAppSelector
};
