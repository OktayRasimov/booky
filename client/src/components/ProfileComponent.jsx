import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  padding: 1.4rem;
`;

function ProfileComponent() {
  return (
    <ProfileContainer>
      <h3>Profile Customisation Coming soon...</h3>
    </ProfileContainer>
  );
}

export default ProfileComponent;
