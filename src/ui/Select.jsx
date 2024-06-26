import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;


const Select = ({ options, value, onChange , ...props }) => {
  
  const { t } = useTranslation();
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {
        options?.map((opt) => {
          return (
            <option value={opt.value}
              key={opt.value}>
              {t(opt.label)}
            </option>
          )
        })
      }
    </StyledSelect>
  )
}

export default Select

