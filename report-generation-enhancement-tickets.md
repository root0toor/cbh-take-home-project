**Ticket 1:** Update Agent Table to Include Custom ID

**Description:**
As part of report generation enhancement, we have to update Agent table in the database to include a custom ID field. This will allow Facilities to save their own custom IDs for Agents they work with, which can be used in the reports generated.

**Acceptance Criteria:**
1. Analyze existing Agent table schema and add new column named "custom_id" of type VARCHAR.
2. Ensure "custom_id" column is nullable to accommodate Facilities that may not use custom IDs.
3. Create index on "custom_id" column for efficient retrieval.
4. Develop database migration script to update Agent table schema and populate new "custom_id" field with any existing custom IDs, if available.
5. Implement API endpoint to handle Facility requests for updating custom ID of an Agent.

**Effort Estimate:** 3 story points

**Implementation Details:**
1. Collaborate with database team to analyze Agent table schema and propose necessary changes.
2. Coordinate with backend developers to implement database migration script and update API endpoints accordingly.


**Ticket 2:** Update Report Generation Process

**Description:** In order to incorporate custom IDs provided by Facilities, we need to update the report generation process to use custom ID instead of the internal database ID for Agents.

**Acceptance Criteria:**
1. Modify "generateReport" function to fetch custom ID for each Agent from Agent table using their internal database ID.
2. Update the report generation logic to utilize custom ID instead of the internal database ID when generating the reports.
3. Verify that reports now display the custom ID for each Agent as intended.

**Effort Estimate:** 2 story points

**Implementation Details:**
1. Collaborate with backend developers to identify appropriate modification points in the "generateReport" function.
2. Coordinate with the frontend developers to ensure custom ID is properly displayed in the generated reports.


**Ticket 3:** Update Facility Interface

**Description:** To enable Facilities to manage custom IDs for Agents, we need to enhance Facility interface by adding relevant fields and functionality.

**Acceptance Criteria:**
1. Collaborate with UI/UX team to extend the Facility interface by including a field for entering and saving custom IDs for Agents.
2. Implement the necessary frontend components to support custom ID management, ensuring proper validation and error handling.
3. Enhance the Agent list view in the Facility interface to display custom ID alongside other relevant Agent information.
4. Update the report generation section of the Facility interface to utilize custom ID when generating reports.

**Effort Estimate:** 3 story points

**Implementation Details:**
1. Collaborate closely with UI/UX team to refine the design and ensure a seamless integration of custom ID functionality.
2. Coordinate with the frontend developers to implement necessary UI components and logic for custom ID management.
3. Conduct thorough testing to validate proper functioning of the Facility interface.