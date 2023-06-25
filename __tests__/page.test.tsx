import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Landing Page', () => {
  it('display landing page', async () => {
    render(<Home />)

    const landingTitle = await screen.findByTestId(/landingTitle/i);
    const landingDesc = await screen.findByTestId(/landingDesc/i);
    const landingButton = await screen.findByTestId(/landingButton/i);

    expect(landingTitle).toBeInTheDocument();
    expect(landingTitle.textContent).toEqual('Build Your Talent Pool');
    
    expect(landingDesc).toBeInTheDocument();
    expect(landingDesc.textContent).toEqual('Connect with top talent and streamline your hiring process.');
    
    expect(landingButton).toBeInTheDocument();
    expect(landingButton.textContent).toEqual('Get Started');
  })
})