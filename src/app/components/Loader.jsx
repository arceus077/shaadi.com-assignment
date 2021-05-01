import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader() {

    return (
      <div>
        <CircularProgress style={{ margin: '24% 48%' }} color="secondary" />
      </div>
    );
}
