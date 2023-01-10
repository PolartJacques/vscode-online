import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import DockerService from './service/docker.service';
import { setContainerId } from './redux/docker/actions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingContainer from './pages/LoadingContainerPage';
import EditorPage from './pages/EditorPage';
import { hasContainerSelector } from './redux/docker/selectors';
import StorageService from './service/storage.sercice';
import ErrorPage from './pages/ErrorPage';

const storageService = new StorageService();
const dockerService = new DockerService();

const App: FunctionComponent = () => {
  const isInit = useRef(false);
  const dispatch = useDispatch();
  const hasContainer = useSelector(hasContainerSelector);
  const [isError, setIsError] = useState<boolean>(false);

  const init = useCallback(async () => {
    if (isInit.current) return;
    isInit.current = true;
    const containerId = storageService.get.containerId() ?? await dockerService.createDockerContainer();
    if (!containerId) {
      setIsError(true);
      isInit.current = false;
      return;
    }
    storageService.set.containerId(containerId);
    dispatch(setContainerId(containerId));
    isInit.current = false;
  }, [dispatch]);

  useEffect(() => {
    init();
  }, [init]);

  if (isError) return <ErrorPage />;

  return (
    hasContainer ? <EditorPage /> : <LoadingContainer />
  );
};
export default App;
