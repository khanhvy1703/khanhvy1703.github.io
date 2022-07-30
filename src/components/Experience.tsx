import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import ColoredLine from './ColoredLine';

export default function About() {
  return (
    <div id='experience' style={{ backgroundColor: 'rgba(95, 158, 160, 0.3)' }}>
      <Container>
        <p className='main-header main-color-font'>
          Work Experience & Volunteer
        </p>
        <ColoredLine height={5} color='black' width='30%' />
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{
              background: 'rgb(112, 166, 202)',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgb(112, 166, 202)' }}
            date='May 2022 - June 2022'
            iconStyle={{ background: 'rgb(112, 166, 202)' }}
          >
            <h3 className='vertical-timeline-element-title'>
              Software Engineer Coop
            </h3>
            <h2 className='vertical-timeline-element-subtitle'>
              Priceline
            </h2>
            <h2 className='vertical-timeline-element-subtitle'>New York, NY</h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='May 2022 - June 2022'
            iconStyle={{ background: 'rgb(71,89,101)' }}
          >
            <h3 className='vertical-timeline-element-title'>
              Teaching Assisstant
            </h3>
            <h2 className='vertical-timeline-element-subtitle'>
              Khoury College of Computer Science
            </h2>
            <h2 className='vertical-timeline-element-subtitle'>Boston, MA</h2>
            <p>Teaching Assistant for CS3000 - Algorithms and Data Structure</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='January 2022 - May 2022'
            iconStyle={{ background: 'rgb(71,89,101)' }}
          >
            <h3 className='vertical-timeline-element-title'>
              Teaching Assisstant
            </h3>
            <h2 className='vertical-timeline-element-subtitle'>
              Khoury College of Computer Science
            </h2>
            <h2 className='vertical-timeline-element-subtitle'>Boston, MA</h2>
            <p>Teaching Assistant for CS2810 - Mathematics of Data Models</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='September 2021 - December 2021'
            iconStyle={{ background: 'rgb(71,89,101)' }}
          >
            <h3 className='vertical-timeline-element-title'>
              Build Studio Software Engineer
            </h3>
            <h2 className='vertical-timeline-element-subtitle'>Generate</h2>
            <h2 className='vertical-timeline-element-subtitle'>Boston, MA</h2>
            <p>Student club - member</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='July 2021 - December 2021'
            iconStyle={{ background: 'rgb(71,89,101)' }}
          >
            <h3 className='vertical-timeline-element-title'>
              SDK Engineer Coop
            </h3>
            <h2 className='vertical-timeline-element-subtitle'>Skillz, Inc</h2>
            <h2 className='vertical-timeline-element-subtitle'>
              Portland, OR (Remote)
            </h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='January 2020 - March 2020'
            iconStyle={{ background: 'rgb(71,89,101)' }}
          >
            <h3 className='vertical-timeline-element-title'>Mentor</h3>
            <h2 className='vertical-timeline-element-subtitle'>
              Roxbury Robotics
            </h2>
            <h2 className='vertical-timeline-element-subtitle'>Boston, MA</h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='September 2019 - December 2019'
            iconStyle={{ background: 'rgb(71,89,101)' }}
          >
            <h3 className='vertical-timeline-element-title'>
              Community Service
            </h3>
            <h2 className='vertical-timeline-element-subtitle'>
              Little Brothers - Friends of the Elderly Boston Chapter
            </h2>
            <h2 className='vertical-timeline-element-subtitle'>Boston, MA</h2>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}
