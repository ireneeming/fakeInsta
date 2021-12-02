import React from 'react';
import { Grid , Text, Image} from '../elements';


const Notification = () => {
    let noti = [
        {user_name:'aaa', post_id:'post1', image_url:'' },
        {user_name:'bbb', post_id:'post2', image_url:'' },
        {user_name:'ccc', post_id:'post3', image_url:'' },
        {user_name:'ddd', post_id:'post4', image_url:'' },
        {user_name:'eee', post_id:'post5', image_url:'' },
        {user_name:'fff', post_id:'post6', image_url:'' },
        {user_name:'ggg', post_id:'post7', image_url:'' },
    ]
    return (
        <>
            <Grid padding ="16px" bg="#eff6ff">
                {
                    noti.map((n) => {
                        return(
                            <Grid padding="16px" is_flex="flex; align-items:center;" margin="8px 0" bg="#fff">
                                <Grid width='auto' margin="0 8px 0 0">
                                    <Image shape="square" size="85"/>
                                </Grid>
                                <Grid>
                                    <Text>
                                        <b>{n.user_name}</b>님이 게시글에 댓글을 남겼습니다.
                                    </Text>
                                </Grid>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </>
    );
}

export default Notification;