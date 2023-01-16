import userData from 'components/Profil/user.json';
import statsData from 'components/Stats/data.json';
import Profil from './Profil/Profil';
import Stats from './Stats/Stats';
import FriendList from 'components/Friends/Frends';
import friends from 'components/Friends/friends.json';
import TransactionHistory from './HistoryTransactions/TransactsHistory';
import dataTransact from 'components/HistoryTransactions/transactions.json';
// import dataTransact from 'components/HistoryTransactions/transactions.json'
// import TransactionHistory from 'components/HistoryTransactions/TransactsHistory.jsx';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profil
        src={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <Stats title="Upload stats" stats={statsData} />

      <FriendList friends={friends} />

      <TransactionHistory items={dataTransact} />
      {/* React homework template */}
    </div>
  );
};
