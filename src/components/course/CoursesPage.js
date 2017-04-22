import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
	constructor(props) {
		super(props);
	}



courseRow(course, index) {
	return <div key={index}>{course.title}</div>;
}

render() {
	//debugger;
	const {courses} = this.props;

	return (
		<div>
			<h1>Courses</h1>
			<CourseList courses={courses}/>
		</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	createCourse: PropTypes.func.isRequired
};

function mapStateToProps (state, ownProps) {
	//debugger;
	return {
		courses: state.courses
	};
}

function mapDispatchToProps (dispatch) {
	return {
		createCourse: (course) => dispatch(courseActions.createCourse(course))
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);