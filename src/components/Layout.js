import React from 'react';
import {Grid, Image, Text} from '../elements/index';
import {useSelector} from 'react-redux';

const Layout = (props) => {

    const {left,right,center,layout} = props;

    
    const preview = useSelector((state) => state.image.preview);

    if (layout === 'left') {
        return (
            <> 
            
                
                <Grid is_flex="flex;">
                    <Grid width="50%" margin="0 0.5em 0 0">
                        <Image
                            shape="rectangle" 
                            src={preview ? preview : "https://via.placeholder.com/400x300"}/>
                    </Grid>
                    <Text>
                        {props.contents}
                       
                    </Text>
                </Grid>
                

            </>
        );
    }

    if (layout ==='right') {
        return (
            <> 
                
                <Grid  is_flex="flex;flex-direction:row-reverse;">
                    <Grid width="50%" margin="0 0 0 0.5em">
                        <Image
                            shape="rectangle" 
                            src={preview ? preview : "https://via.placeholder.com/400x300"}/>
                    </Grid>
                    <Text>
                        {props.contents}
                        
                    </Text>
                </Grid>

            </>
        );
    }
    if (layout ==='center') {
        return (
            <> 
                
                <Grid padding="16px">
                <Text>
                    {props.contents}
                    
                </Text>
            </Grid>
            <Grid>
                <Image
                    shape="rectangle"
                    src={preview ? preview : "https://via.placeholder.com/400x300"}/>
            </Grid>

            </>
        );
    }

    return (
        <> 
            

        </>
    );
}

Layout.defaultProps = {
   

}



export default Layout;