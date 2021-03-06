import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import CheckboxTree from '../src/js/CheckboxTree';
import TreeNode from '../src/js/TreeNode';

describe('<CheckboxTree />', () => {
	describe('component', () => {
		it('should render the react-checkbox-tree container', () => {
			const wrapper = shallow(
				<CheckboxTree
					checked={[]}
					expanded={[]}
					nodes={[]}
					onCheck={() => {}}
					onExpand={() => {}}
				/>,
			);

			assert.isTrue(wrapper.find('.react-checkbox-tree').exists());
		});
	});

	describe('nodes', () => {
		it('should render the node\'s label', () => {
			const wrapper = shallow(
				<CheckboxTree
					nodes={[{ value: 'jupiter', label: 'Jupiter' }]}
				/>,
			);

			assert.equal('Jupiter', wrapper.find(TreeNode).prop('label'));
		});

		it('should render the node\'s value', () => {
			const wrapper = shallow(
				<CheckboxTree
					nodes={[{ value: 'jupiter', label: 'Jupiter' }]}
				/>,
			);

			assert.equal('jupiter', wrapper.find(TreeNode).prop('value'));
		});

		it('should render multiple nodes', () => {
			const wrapper = shallow(
				<CheckboxTree
					nodes={[
						{ value: 'jupiter', label: 'Jupiter' },
						{ value: 'saturn', label: 'Saturn' },
					]}
				/>,
			);

			assert.equal('jupiter', wrapper.find(TreeNode).at(0).prop('value'));
			assert.equal('saturn', wrapper.find(TreeNode).at(1).prop('value'));
		});

		it('should render node children', () => {
			const wrapper = shallow(
				<CheckboxTree
					nodes={[
						{
							value: 'jupiter',
							label: 'Jupiter',
							children: [
								{ value: 'europa', label: 'Europa' },
							],
						},
					]}
				/>,
			);

			const { value, label } = wrapper.find(TreeNode).prop('rawChildren')[0];

			assert.deepEqual({ value: 'europa', label: 'Europa' }, { value, label });
		});
	});
});

