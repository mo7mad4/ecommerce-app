import styled from "styled-components";
export const InputGroup = styled.div`
    margin: 20px 0;
`
export const Input = styled.input`
    padding:10px;
    ${props => props.theme.fonts.fontItems.body1.size +
        `line-height: ${props.theme.fonts.fontItems.body1.height}` +
        `letter-spacing: ${props.theme.fonts.fontItems.body1.spacing}`
    };

    color: ${props => props.theme.colors.dark};
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${props => props.theme.colors.gray400};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
        color: ${props => props.theme.colors.gray400};
    }

 
    border-radius: 6px;
    outline:none;

    width:${props => props.width ? props.width : 100}%;
    transition:0.3s all ease-in-out;

    &:focus{
        box-shadow:0px 0px 5px 5px ${props => props.theme.colors.gray200};
    }
`
export const Textarea = styled.textarea`
    padding:10px;
    ${props => props.theme.fonts.body1.size +
        `line-height: ${props.theme.fonts.body1.height}` +
        `letter-spacing: ${props.theme.fonts.body1.spacing}`
    };

    color: ${props => props.theme.colors.dark};
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${props => props.theme.colors.gray400};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
        color: ${props => props.theme.colors.gray400};
    }

    border-radius: 6px;
    outline:none;

    width:${props => props.width ? props.width : 100}%;
    transition:0.3s all ease-in-out;

    &:focus{
        box-shadow:0px 0px 5px 5px ${props => props.theme.colors.gray200};
    }
`

export const InputLabel = styled.p`
    color: ${props => props.theme.colors.dark};
    ${props => props.theme.fonts.fontItems.body1.size +
        `line-height: ${props.theme.fonts.fontItems.body1.height}` +
        `letter-spacing: ${props.theme.fonts.fontItems.body1.spacing}`
    };
    
    &::first-letter{
        text-transform: uppercase;  
    }
    
    margin-bottom:5px;
    user-select: none;
`

export const InputError = styled.p`
    color: ${props => props.theme.colors.baseColorRed};
    ${props => props.theme.fonts.fontItems.body2.size +
        `line-height: ${props.theme.fonts.fontItems.body2.height}` +
        `letter-spacing: ${props.theme.fonts.fontItems.body2.spacing}`
    };
    margin-top:5px;
`
