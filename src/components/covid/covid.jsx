import React, { useEffect, useState } from 'react';
import { Box, CardContent, Grid, Typography } from '@material-ui/core';
import styles from './covid.module.css';
import Countup from 'react-countup';


const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (

        <div>
            <div className={styles.lastdate}>{data.lastupdatedtime}</div>
            <div className={styles.container}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item component={Box} xs={3} boxShadow={0}>
                        <CardContent className={styles.box1} >
                            <Typography color="red" gutterBottom class={styles.title}>Confirmed</Typography>

                            <Typography variant="h6">
                                <Countup start={0} end={data.confirmed} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Box} xs={3} >
                        <CardContent className={styles.box2}>
                            <Typography color="red" gutterBottom class={styles.title}>Active</Typography>

                            <Typography variant="h6">
                                <Countup start={0} end={data.active} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Box} xs={3} >
                        <CardContent className={styles.box3}>
                            <Typography color="red" gutterBottom class={styles.title}>Recovered</Typography>

                            <Typography variant="h6">
                                <Countup start={0} end={data.recovered} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Box} xs={3} >
                        <CardContent className={styles.box4}>
                            <Typography color="red" gutterBottom class={styles.title}>Deceased</Typography>

                            <Typography variant="h6">
                                <Countup start={0} end={data.deaths} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>


            </div>
        </div>

    )
}

export default Covid;