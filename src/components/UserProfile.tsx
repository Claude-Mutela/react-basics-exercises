// components/UserProfile.tsx

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface UserProfileProps {
  user: User;
}

// Optionnel : On peut aussi destructurer { name, email, isAdmin } directement si on veut
const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="card">
      <p>Nom : {user.name}</p>
      <p>Email : {user.email}</p>
      {/* Utilisation du && à la place du ternaire pour éviter le ": null" */}
      {user.isAdmin && <p>Rôle : <span className="badge">Modérateur</span></p>}
    </div>
  );
};

export default UserProfile;