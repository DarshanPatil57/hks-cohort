import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atom/atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

export default App;

export function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const [notificationCount, setNotificationCount] = useRecoilState(notificationAtom);
  const totalNotificationCount =  useRecoilValue(totalNotificationSelector)

  const incrementNotificationCount = () => {
    setNotificationCount(notificationCount + 1);
  };

  return (
    <>
      <h1>Recoil ...</h1>

      <div>
        <button>Home</button>
        <button>
          My Network <sup> ({networkCount >= 100 ? "99+" : networkCount}) </sup>
        </button>
        <button>
          Jobs <sup> ({jobsCount < 0 ? '' : jobsCount}) </sup>
        </button>
        <button>
          Messaging <sup> ({messagingCount >= 100 ? "99+" : messagingCount}) </sup>
        </button>
        <button>
          Notification <sup>({notificationCount >= 100 ? "99+" : notificationCount})</sup>
        </button>
        <button onClick={incrementNotificationCount}>Me <sup>({totalNotificationCount})</sup></button>
      </div>
    </>
  );
}
