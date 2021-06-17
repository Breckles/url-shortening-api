import SellingPoint from './selling-point/SellingPoint';

import brandRecognitionIcon from '../../assets/images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../assets/images/icon-fully-customizable.svg';

import classes from './SellingPoints.module.scss';

type SellingPointsProps = {
  className?: string;
};

const SellingPoints = ({ className = '' }: SellingPointsProps) => {
  return (
    <section className={`${className} ${classes.sellingPoints}`}>
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div>
        <ul>
          <li>
            <SellingPoint
              className={classes.sellingPoint}
              iconPath={brandRecognitionIcon}
            >
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instill confidence in
                your content.
              </p>
            </SellingPoint>
          </li>
          <li>
            <SellingPoint
              className={classes.sellingPoint}
              iconPath={detailedRecordsIcon}
            >
              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </SellingPoint>
          </li>
          <li>
            <SellingPoint
              className={classes.sellingPoint}
              iconPath={fullyCustomizableIcon}
            >
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </SellingPoint>
          </li>
        </ul>
        <div className={classes.connector}></div>
      </div>
      <div className={classes.background}></div>
    </section>
  );
};

export default SellingPoints;
