describe('test the add post flow', function(){
	beforeEach(function(){
		browser().navigateTo('/posts');
	});

	it('should open the home page', function(){
		expect(element('h1').text()).toBe('Listing posts');
	});

	
});