# The name of the panel to be added to HORIZON_CONFIG. Required.
PANEL = 'notifications'

# The name of the dashboard the panel is associated with. Required.
PANEL_DASHBOARD = 'admin'

# The name of the panel group the panel is associated with.
PANEL_GROUP = 'admin'

# Python panel class of panel to be added
ADD_PANEL = 'Hermes.content.Notifications.panel.Notifications'

# If set to True, this dashboard will not be added to the settings.
DISABLED = False

# A list of applications to be added to INSTALLED_APPS.
ADD_INSTALLED_APPS = [
    'Hermes',
]

ADD_ANGULAR_MODULES = [
    'Notifications',
]

AUTO_DISCOVER_STATIC_FILES = True