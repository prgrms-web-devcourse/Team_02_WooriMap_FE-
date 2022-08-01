import Image from 'next/image';
import styled from '@emotion/styled';
import Input from '../../atoms/Input';

export const TextInputWrapper = styled.div`
  display: flex;
  flex: 1;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 13px 16px;
`;

export const TextInput = styled(Input)`
  outline-style: none;
  border: 0;
  outline: 0;
  width: 98%;
  font-size: 16px;
  font-weight: 600;
`;

export const DeleteButton = styled(Image)`
  cursor: pointer;
  position: absolute;
  right: 16px;
`;
