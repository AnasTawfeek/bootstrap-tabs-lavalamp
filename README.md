bootstrap-tabs-lavalamp
=======================

Bootstrap Togglable tabs Lava lamp effect

This simple plugin change the default BS's togglable tabs to the Lava lamp effect,

You should reset the tabs styling like this:

Normal:

.nav-tabs{border:none;margin-left:50px;background:#ccc}.nav-tabs li{position:relative;z-index:5}.nav-tabs li a{border:none;color:#fff}.nav-tabs li a:hover{background:transparent}.nav-tabs li.active a,.nav-tabs li.active a:hover,.nav-tabs li.active a:focus{border:none;background:transparent}.nav-tabs li.lavalamp-walker{position:absolute;background:#d93339;z-index:0}

LESS:

.nav-tabs{
	border:none;
	margin-left: 50px;
	background: #ccc;
	li{
		position: relative;
		z-index: 5;
		a{
			border:none;
			color: #fff;
			&:hover{
				background: transparent;
			}
		}

		&.active{
			a{
				&, &:hover, &:focus{
					border: none;
					background: transparent;
				}
			}
		}

		&.lavalamp-walker{
			position: absolute;
			background: #d93339;
			z-index: 0;
		}
	}
}
