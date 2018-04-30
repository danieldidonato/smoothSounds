$('.js-modal').on($.modal.BEFORE_OPEN, (e, modal) => {
	setTimeout(() => {
		modal.$elm.find('audio').trigger('play')
	}, 1000);
});
