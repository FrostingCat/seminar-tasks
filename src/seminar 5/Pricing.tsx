import { Typography } from '@material-ui/core'
import "./Pricing.css"

function Pricing() {
	return (
		<div className='pricing-ev'>
			<Typography variant="h2" className='pricing' gutterBottom>
				Pricing
			</Typography>
			<Typography variant="h5" className='pricing-info'>
				Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.
			</Typography>
		</div>
	);
}

export default Pricing;