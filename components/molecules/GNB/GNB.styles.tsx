import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 75rem;
  height: 100%;
`;
