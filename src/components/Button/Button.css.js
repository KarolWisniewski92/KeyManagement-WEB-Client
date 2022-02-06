import styled from "styled-components";

const colorPicker = (color) => {
    switch (color) {
        case 'red':
            return {
                'backgroundColor': '#fd1c1c',
                'hoverBackgroundColor': '#b61515',
                'color': 'white'
            };

        case 'blue':
            return ({
                'backgroundColor': '#255ed8',
                'hoverBackgroundColor': '#1c4397',
                'color': 'white'
            });

        case 'green':
            return ({
                'backgroundColor': '#4ac718',
                'hoverBackgroundColor': '#348d11',
                'color': 'white'
            });

        case 'orange':
            return ({
                'backgroundColor': '#fc7f0a',
                'hoverBackgroundColor': '#b64b04',
                'color': 'white'
            });

        case 'pink':
            return ({
                'backgroundColor': '#ffa3eb',
                'hoverBackgroundColor': '#cf77bc',
                'color': 'black'
            });

        case 'yellow':
            return ({
                'backgroundColor': '#fffb00',
                'hoverBackgroundColor': '#ddda29',
                'color': 'black'
            });

        default:
            return ({
                'backgroundColor': '#255ed8',
                'hoverBackgroundColor': '#1c4397',
                'color': 'white'
            });
    }
}

//-------------------------------RootButton-----------------------------------

const RootButton = styled.button`
padding: ${({ theme }) => `${theme.spacing.sm}px`};
margin-right: ${({ theme }) => `${theme.spacing.sm}px`};
margin-bottom: ${({ theme }) => `${theme.spacing.sm}px`};
background-color: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return checkedColor.backgroundColor
    }
    };

color: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return checkedColor.color
    }
    };
cursor: pointer;
border: none;
transition:0.5s;
:hover{
    background-color: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return checkedColor.hoverBackgroundColor
    }
    };
}
`
//--------------------------------MenuButton-----------------------------------

export const MenuButton = styled(RootButton)`
padding: 10px 20px;
border: none;

`
//--------------------------------PrimaryButton--------------------------------

export const PrimaryButton = styled(RootButton)`
padding: ${({ theme, high }) => high ? `20px ${theme.spacing.sm}px` : `${theme.spacing.sm}px`};

`
//--------------------------------SecondaryButton---------------------------------------

export const SecondaryButton = styled(RootButton)`
border-radius:5px;
background: none;
color: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return checkedColor.backgroundColor
    }
    };

border: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return `2px solid ${checkedColor.backgroundColor}`
    }
    };
:hover{
    color: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return checkedColor.color
    }
    };
    background-color: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return checkedColor.backgroundColor
    }
    };
    border: ${({ color }) => {
        const checkedColor = colorPicker(color)
        return `2px solid ${checkedColor.backgroundColor}`
    }
    };
}
`
