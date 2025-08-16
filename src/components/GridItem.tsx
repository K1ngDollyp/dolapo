import { Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledGrid = styled(Grid)({});

export const GridItem = (props: GridProps) => {
    return <StyledGrid {...props} />;
};
