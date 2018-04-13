import styled from 'styled-components';

export const WrapperBtn = styled.div`
  display: flex;
  justify-conetents: flex-end;
`;

export const Btn_remove = styled.button`
  background: var(--color-deep-energy);
  color: var(--color-silk-white);
  padding: 1rem 2rem;
  display: block;
`;

const CommonInputStyle = styled.input`
  display: block;
  padding: .5rem 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  font-color: var(--color-dark-night);
  font-weight: bold;
`;

export const InputForName = CommonInputStyle.extend`border: 2px solid var(--color-night);`;
export const InputForPresent = CommonInputStyle.extend`
  border: 2px solid var(--color-ocean);
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  border: 2px solid var(--color-deep-energy);
  width: 20rem;
  padding: 2rem;
  margin-bottom: 1rem;
`;
