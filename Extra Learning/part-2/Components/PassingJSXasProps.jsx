export function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge:</h1>

      <ProfileCard
        name="Alice"
        age={50}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={35}
        greeting={<strong>Hi Bob, have a wonderful day!</strong>}
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

function ProfileCard({ name, age, greeting, children }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <div>{greeting}</div>
      <div>{children}</div>
    </>
  );
}
