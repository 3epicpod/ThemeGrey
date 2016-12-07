app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
			
			.state('dashboard1', {
                url: '/dashboard1',
                templateUrl: 'assets/tpl/dashboard/dashboard1.html',
                controller: 'dashboard1Ctrl',
                ncyBreadcrumb: {
                    label: '/ Dashboard 1'
                }
            })
			.state('dashboard2', {
                url: '/dashboard2',
                templateUrl: 'assets/tpl/dashboard/dashboard2.html',
                controller: 'dashboard2Ctrl',
                ncyBreadcrumb: {
                    label: '/ Dashboard 2'
                }
            })
			.state('mail_layout', {
                url: '/mail_layout',
                templateUrl: 'assets/tpl/mail_layout/mail_layout.html',
                controller: 'dashboard2Ctrl',
                ncyBreadcrumb: {
                    label: '/ Mail Layout'
                }
            })
			.state('carousel', {
                url: '/carousel',
                templateUrl: 'assets/tpl/carousel/carousel.html',
                controller: '',
                ncyBreadcrumb: {
                    label: '/ Carousel'
                }
            })
			.state('loadspin', {
                url: '/loadspin',
                templateUrl: 'assets/tpl/loadspin/loadspin.html',
                controller: '',
                ncyBreadcrumb: {
                    label: '/ Loading Spinners'
                }
            })
            .state('buttons', {
                url: '/buttons',
                templateUrl: 'assets/tpl/uielements/button.html',
                controller: '',
                ncyBreadcrumb: {
                    label: '/ Buttons'
                }
            })
            .state('signature', {
                url: '/signature',
                templateUrl: 'assets/tpl/uielements/signature.html',
                controller: 'signCtrl',
                ncyBreadcrumb: {
                    label: '/ Signature'
                }
            })
            .state('layout', {
                url: '/layout',
                templateUrl: 'assets/tpl/grid/layout.html',
                controller: '',
                ncyBreadcrumb: {
                    label: '/ Layouts'
                }
            })
            .state('responsiveLayout', {
                url: '/responsiveLayout',
                templateUrl: 'assets/tpl/grid/responsive.html',
                controller: '',
                ncyBreadcrumb: {
                    label: '/ Responsive Layout'
                }
            })
            .state('fontawesome', {
                url: '/fontawesome',
                templateUrl: 'assets/tpl/uielements/fontawesome.html',
                controller: '',
                ncyBreadcrumb: {
                    label: '/ FontAwesome Icons'
                }
            })
            .state('alert', {
                url: '/alert',
                templateUrl: 'assets/tpl/uielements/alert.html',
                controller: 'AlertCtrl',
                ncyBreadcrumb: {
                    label: '/ Alert'
                }
            })
            .state('line/bar', {
                url: '/chart1',
                templateUrl: 'assets/tpl/charts/line-bar.html',
                controller: 'Chart1Ctrl',
                ncyBreadcrumb: {
                    label: '/ Chart'
                }
            })
            .state('pie/donut', {
                url: '/chart2',
                templateUrl: 'assets/tpl/charts/pie-donut.html',
                controller: 'Chart2Ctrl',
                ncyBreadcrumb: {
                    label: '/ Chart'
                }
            })
            .state('3d/semi', {
                url: '/chart3',
                templateUrl: 'assets/tpl/charts/3d-semi.html',
                controller: 'Chart3Ctrl',
                ncyBreadcrumb: {
                    label: '/ Chart'
                }
            })
            .state('basicTable', {
                url: '/basicTable',
                templateUrl: 'assets/tpl/tables/basic.html',
                controller: 'BasicCtrl',
                ncyBreadcrumb: {
                    label: '/ Basic Table'
                }
            })
            .state('angularTable', {
                url: '/angularTable',
                templateUrl: 'assets/tpl/tables/angular.html',
                controller: 'AngularCtrl',
                ncyBreadcrumb: {
                    label: '/ Angular Table'
                }
            })
            .state('sortableTable', {
                url: '/sortableTable',
                templateUrl: 'assets/tpl/tables/sortable.html',
                controller: 'SortableCtrl',
                ncyBreadcrumb: {
                    label: '/ Sortable Table'
                }
            })
            .state('paginateTable', {
                url: '/paginateTable',
                templateUrl: 'assets/tpl/tables/pagination.html',
                controller: 'PaginateCtrl',
                ncyBreadcrumb: {
                    label: '/ Paginate Table'
                }
            })
            .state('draganddrop', {
                url: '/draganddrop',
                templateUrl: 'assets/tpl/uielements/draganddrop.html',
                controller: 'DradAndDropCtrl',
                ncyBreadcrumb: {
                    label: '/ Drag And Drop'
                }
            })
            .state('accordion', {
                url: '/accordion',
                templateUrl: 'assets/tpl/uielements/accordion.html',
                controller: 'accordionCtrl',
                ncyBreadcrumb: {
                    label: '/ Accordion'
                }
            })
            .state('card', {
                url: '/card',
                templateUrl: 'assets/tpl/uielements/card.html',
                controller: 'cardCtrl',
                ncyBreadcrumb: {
                    label: '/ Card 1'
                }
            })
            .state('card2', {
                url: '/cards2',
                templateUrl: 'assets/tpl/uielements/cards2.html',
                controller: 'card2Ctrl',
                ncyBreadcrumb: {
                    label: '/ Card 2'
                }
            })
            .state('tooltip_popover', {
                url: '/tooltip_popover',
                templateUrl: 'assets/tpl/uielements/tooltip_popover.html',
                controller: 'accordionCtrl',
                ncyBreadcrumb: {
                    label: '/ Tooltip & Popover'
                }
            })
			.state('error400', {
                url: '/error400',
                templateUrl: 'assets/tpl/extra/error400.html',
				controller: 'extraCtrl', 
                ncyBreadcrumb: {
                    label: '/ Error 400'
                }
            })
			.state('error401', {
                url: '/error401',
                templateUrl: 'assets/tpl/extra/error401.html',
				controller: 'extraCtrl', 
                ncyBreadcrumb: {
                    label: '/ Error 401'
                }
            })
			.state('error404', {
                url: '/error404',
                templateUrl: 'assets/tpl/extra/error404.html',
				controller: 'extraCtrl', 
                ncyBreadcrumb: {
                    label: '/ Error 404'
                }
            })
			.state('error500', {
                url: '/error500',
                templateUrl: 'assets/tpl/extra/error500.html',
				controller: 'extraCtrl', 
                ncyBreadcrumb: {
                    label: '/ Error 500'
                }
            })
			.state('map', {
                url: '/map',
                templateUrl: 'assets/tpl/extra/map.html',
                ncyBreadcrumb: {
                    label: '/ Map'
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'assets/tpl/extra/login.html',
				controller: 'extraCtrl',
                ncyBreadcrumb: {
                    label: '/ Login'
                }
            })
			.state('register', {
                url: '/register',
                templateUrl: 'assets/tpl/extra/register.html',
				controller: 'extraCtrl', 
                ncyBreadcrumb: {
                    label: '/ Register'
                }
            })
			.state('forgotPwd', {
                url: '/forgotPwd',
                templateUrl: 'assets/tpl/extra/forgotPwd.html',
				controller: 'extraCtrl', 
                ncyBreadcrumb: {
                    label: '/ Forgot Password'
                }
            })
			.state('basicform', {
                url: '/basicform',
                templateUrl: 'assets/tpl/forms/basic.html',
                ncyBreadcrumb: {
                    label: '/ Basci Form'
                }
            })
			.state('thankyou', {
                url: '/thankyou',
                templateUrl: 'assets/tpl/extra/thankyou.html',
				controller: 'extraCtrl', 
                ncyBreadcrumb: {
                    label: '/ Thank you'
                }
            })
			.state('formlayout', {
                url: '/formlayout',
                templateUrl: 'assets/tpl/forms/formlayout.html',
                ncyBreadcrumb: {
                    label: '/ Form Layouts'
                }
            })
			.state('formvalidation', {
                url: '/formvalidation',
                templateUrl: 'assets/tpl/forms/form_validation.html',
                ncyBreadcrumb: {
                    label: '/ Form Validation'
                }
            })
			.state('pwdStrength', {
                url: '/pwdStrength',
                templateUrl: 'assets/tpl/forms/passwordStrength.html',
                ncyBreadcrumb: {
                    label: '/ Password Strength'
                }
            })
			.state('loading', {
                url: '/loading',
                templateUrl: 'assets/tpl/forms/loading.html',
                ncyBreadcrumb: {
                    label: '/ Loading Bar'
                }
            })
			.state('floatingBtn', {
                url: '/floatingBtn',
                templateUrl: 'assets/tpl/floating_btn/f_btn.html',
                ncyBreadcrumb: {
                    label: '/ Floating Buttons'
                }
            })
			.state('tabform', {
                url: '/tabform',
                templateUrl: 'assets/tpl/forms/tabform.html',
                ncyBreadcrumb: {
                    label: '/ Tab Form'
                }
            });
});