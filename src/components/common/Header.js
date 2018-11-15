import React, {Component} from 'react';

import './Header.scss';

const Header = () => (
    <header
        className="header"
    >
    	<div class="d-flex">
	    	<div class="header-left">
		    	<a href="#" class="nav-toggler">
		    		<span class="icon"> icon</span>
		    	</a>	
		    	<a href="#" class="logo">
		    		<img src="../../assets/img/tpl/logo.svg" alt="" width="50" />
		    	</a>
		    </div>	

	    	<div class="header-right">
	    		<ul class="header-nav">
	    			<li>
	    				<div class="dropdown-nav">
	    					<a class="dropdown-toggle" href="#">
	    						<span class="arrow"><i class="icon-calendar"></i></span>

								<i class="icon-chat"></i>
								<i class="icon-club"></i>
								<i class="icon-command"></i>
								<i class="icon-crm"></i>
								<i class="icon-dashboard"></i>
								<i class="icon-docs"></i>
								<i class="icon-payment"></i>
								<i class="icon-settings"></i>
								<i class="icon-toggler"></i>
								<i class="icon-tourney"></i>
								<i class="icon-user"></i>
	    					</a>
							<div class="dropdown-menu">
								
							</div>
						</div>
	    					
	    			</li>
	    		</ul>
		    </div>	
		</div>

	       
    </header>
);

export {Header};