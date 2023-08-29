import styled from "styled-components";

export const CheckboxDiv = styled.div`
    label {
        cursor: pointer;
        transition: 0.2s;
        ${props => props.theme.fonts.fontItems.body1.size}
        ${props => props.theme.fonts.fontItems.body1.height}
        ${props => props.theme.fonts.fontItems.body1.spacing}
        color: ${props => props.theme.colors.dark};
    }

    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    /* for the label element associated with .custom-checkbox */
    .custom-checkbox + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    /* creating a pseudo-element in label before with the following styles*/
    .custom-checkbox + label::before {
        transition: 0.3s;
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 2px solid ${props => props.error ? props.theme.colors.baseColorRed : "#BDBDBD"};
        border-radius: 5px;

        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 70% 70%;
    }
    /* styles for a checkbox in the checked state */
    .custom-checkbox:checked + label::before {
        border-color: ${props => props.theme.colors.blue};
        background-color: ${props => props.theme.colors.blue};
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2210%22%20viewBox%3D%220%200%2012%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%202L4.5%208L2%205.27273%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3C%2Fsvg%3E%0A");
    }
`