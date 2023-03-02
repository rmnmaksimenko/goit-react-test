import { User } from 'components/User/User';
import useLocalStorage from 'hooks/useLocalStorage';
import users from '../../data/users.json';

const STORAGE = 'follow';

export const UserContainer = () => {
  const [follow, setFollow] = useLocalStorage(STORAGE, []);

  const isFollowed = ({ id }) => {
    return follow.includes(id);
  };

  const changeFollow = ({ id }) => {
    if (!isFollowed({ id })) {
      setFollow([...follow, id]);
    } else {
      setFollow(follow.filter(followed => followed !== id));
    }
  };

  const result = users.users.map(user => (
    <User
      key={user.id}
      data={user}
      isfollowed={isFollowed}
      changefollow={changeFollow}
    />
  ));
  return <div>{result}</div>;
};
